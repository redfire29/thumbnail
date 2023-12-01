<template lang="pug">
canvas(
  class="border-2 border-blue-800 mx-auto max-w-[600px] aspect-[1920/1080]",
  ref="myCanvas",
  @mousedown="startDrag",
  @mouseup="stopDrag",
  @mousemove="drag",
  @wheel.prevent="handleZoom"
)
div(class="text-center mt-4")
  button(
    @click="changeZindex(1)",
    class="border-2 mx-2 px-2 cursor-pointer border-orange-700 shadow-none",
    class="hover:bg-orange-400 hover:text-orange-950"
  ) 向上一層
  button(
    @click="changeZindex(-1)",
    class="border-2 mx-2 px-2 cursor-pointer border-orange-700 shadow-none",
    class="hover:bg-orange-400 hover:text-orange-950"
  ) 向下一層

</template>

<script setup>
const scale = ref(1)
const activeObject = ref(null)
const startDragData = ref({ x: 0, y: 0 })
const myCanvas = ref(null);
const objects = reactive([
  { id: 1, x: 30, y: 30, width: 50, height: 50, selected: false, isDragging: false, scale: 1, fillStyle: '#3498db' },
  { id: 2, x: 30, y: 30, width: 50, height: 50, selected: false, isDragging: false, scale: 1, fillStyle: '#bbb' },
])

const handleSize = 10; // 控制點大小
const handles = [
  { cursor: 'LT', x: 0, y: 0 }, // 左上
  { cursor: 'CT', x: 0.5, y: 0 },    // 上
  { cursor: 'RT', x: 1, y: 0 },  // 右上
  { cursor: 'RC', x: 1, y: 0.5 },     // 右
  { cursor: 'RB', x: 1, y: 1 },   // 右下
  { cursor: 'CB', x: 0.5, y: 1 },     // 下
  { cursor: 'LB', x: 0, y: 1 },  // 左下
  { cursor: 'LC', x: 0, y: 0.5 },    // 左
];

const drawObjects = () => {
  const ctx = myCanvas.value.getContext('2d');
  ctx.clearRect(0, 0, myCanvas.value.width, myCanvas.value.height);
  useForEach(objects, (obj) => {
    ctx.save();
    ctx.translate(obj.x, obj.y);
    ctx.scale(obj.scale, obj.scale);
    ctx.fillStyle = obj.fillStyle;
    ctx.fillRect(0, 0, obj.width, obj.height);
    // 判斷是否需要繪製控制點
    if (obj.selected) {
      handles.forEach(handle => {
        const handleX = handle.x * obj.width - handleSize / 2;
        const handleY = handle.y * obj.height - handleSize / 2;

        ctx.fillStyle = '#000';
        ctx.fillRect(handleX, handleY, handleSize, handleSize);
      });
    }
    ctx.restore();
  })
}

const dragHandle = ref(null);
const handleZoom = (event) => {
  const delta = event.deltaY > 0 ? -0.1 : 0.1;

  if (activeObject.value) {
    activeObject.value.scale += delta;
    activeObject.value.scale = Math.max(0.1, activeObject.value.scale);
  }

  drawObjects();
}

const handleResize = (obj, handle, event) => {
  // // 計算新的寬度和高度
  const newWidth = event.clientX - (obj.x * handle.x) - myCanvas.value.getBoundingClientRect().left;
  const newHeight = event.clientY - (obj.y * handle.y) - myCanvas.value.getBoundingClientRect().top;

  // // 避免寬度或高度變為負數
  // if (newWidth > 0 && newHeight > 0) {
  //   obj.width = newWidth;
  //   obj.height = newHeight;
  // }
  const mouseX = event.clientX - myCanvas.value.getBoundingClientRect().left;
  const mouseY = event.clientY - myCanvas.value.getBoundingClientRect().top;

  switch (handle.cursor) {
    case 'LT':
      obj.width = obj.width + obj.x - mouseX;
      obj.x = mouseX;
      obj.height = obj.height + obj.y - mouseY;
      obj.y = mouseY;
      break;
    case 'CT':
      obj.height = obj.height + obj.y - mouseY;
      obj.y = mouseY;
      break;
    case 'RT':
      obj.height = obj.height + obj.y - mouseY;
      obj.y = mouseY;
      obj.width = newWidth;
      break;
    case 'RC':
      obj.width = newWidth;
      break;
    case 'RB':
      obj.width = newWidth;
      obj.height = newHeight;
      break;
    case 'CB':
      obj.height = newHeight;
      break;
    case 'LB':
      obj.width = obj.width + obj.x - mouseX;
      obj.x = mouseX;
      obj.height = newHeight;
      break;
    case 'LC':
      obj.width = obj.width + obj.x - mouseX;
      obj.x = mouseX;
      break;
    default:
      break;
  }

  drawObjects();
}

const nowObj = ref(null)
const nowHand = ref(null)

let clickedObject;
const startDrag = (event) => {
  clickedObject = '';
  const clickX = event.clientX - myCanvas.value.getBoundingClientRect().left;
  const clickY = event.clientY - myCanvas.value.getBoundingClientRect().top;
  // const clickedObject = objects.find(obj =>
  //   clickX >= obj.x + (obj.width < 0 ? obj.width: 0) &&
  //   clickX <= obj.x + Math.abs(obj.width) + handleSize &&
  //   clickY >= obj.y + (obj.height < 0 ? obj.height: 0) &&
  //   clickY <= obj.y + Math.abs(obj.height) + handleSize
  // );
  const filterObject = useFilter(objects, (obj) => {
    return clickX >= obj.x + (obj.width < 0 ? obj.width: 0) &&
    clickX <= obj.x + Math.abs(obj.width) + handleSize &&
    clickY >= obj.y + (obj.height < 0 ? obj.height: 0) &&
    clickY <= obj.y + Math.abs(obj.height) + handleSize
  })
  useForEach(objects, (obj) => {
    obj.selected = false;
    obj.isDragging = false;
  })
  useForEach(filterObject, (obj, index) => {
    // obj.shift();
    console.log(obj, index);
    clickedObject = obj
  })
  console.log(objects, 'objects');
  console.log(clickedObject, 'clickedObject')
  console.log(filterObject, 'filterObject');

  let clickedHandle = '';
  useForEach(objects, (obj) => {
    const headFind = handles.find(handle => {
      const handleX = obj.x + handle.x * obj.width - handleSize / 2;
      const handleY = obj.y + handle.y * obj.height - handleSize / 2
      return (
        clickX >= handleX &&
        clickX <= handleX + handleSize &&
        clickY >= handleY &&
        clickY <= handleY + handleSize
      );
    });
    if (headFind) {
      clickedHandle = headFind;
    }
  })
  if (clickedHandle) {
    dragHandle.value = true;
    console.log('點擊到控制點', clickedHandle, 'of物件', clickedObject);
    nowObj.value = clickedObject;
    nowHand.value = clickedHandle
    clickedObject.selected = true;
    handleResize(clickedObject, clickedHandle, event);
  } else if (clickedObject) {
    console.log('click object')
    clickedObject.isDragging = true;
    clickedObject.selected = true;
    activeObject.value = clickedObject;
    startDragData.value = { x: event.clientX, y: event.clientY };
    drawObjects();
  } else {
    useForEach(objects, (obj) => {
      obj.selected = false;
      obj.isDragging = false;
    })
    nowObj.value = '';
    nowHand.value = ''
    drawObjects();
    console.log(clickedObject, 'clear');
  }
}
const stopDrag = () => {
  if (activeObject.value) {
    activeObject.value.isDragging = false;
  }
  activeObject.value = null;
  dragHandle.value = false
  nowObj.value = null;
  nowHand.value = null;
}
const drag = (event) => {
  if (activeObject.value && activeObject.value.isDragging) {
    const deltaX = event.clientX - startDragData.value.x;
    const deltaY = event.clientY - startDragData.value.y;

    activeObject.value.x += deltaX;
    activeObject.value.y += deltaY;

    startDragData.value = { x: event.clientX, y: event.clientY };

    drawObjects();
  } else if (dragHandle.value && nowObj.value && nowHand.value) {
    handleResize(nowObj.value, nowHand.value, event);
  }
}

const changeZindex = (zindex) => {
  console.log(clickedObject, zindex, 'zindex');
  const currentIndex = useFindIndex(objects, {id: clickedObject.id})
  console.log(currentIndex, 'currentIndex');
  if (currentIndex !== -1) {
    // 從陣列中移除該物件
    const removedObject = objects.splice(currentIndex, 1)[0];
    // 插入物件到目標索引位置
    objects.splice(currentIndex + zindex, 0, removedObject);
    drawObjects();
  }
}

onMounted(() => {
  drawObjects();
  console.log('drawObjects');
})
</script>