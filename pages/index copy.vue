<template lang="pug">
div(
  class="border-2 border-blue-800 mx-auto max-w-[600px] aspect-[1920/1080] p-2"
  ref="drawingContainer"
  @mousemove="handleMouseMove"
)
  div(
    class="relative border-2 border-dashed border-green-500 inline-block"
  )
    div(
      v-for="(controlPoint, index) in controlPoints",
      :key="index",
      @mousedown="handleMouseDown(index)"
      @mouseup="handleMouseUp"
      :class="pointPosition(controlPoint)",
      class="absolute z-10 cursor-pointer rounded-full h-2 w-2 bg-red-500 -translate-x-1 -translate-y-1"
    )
    div(
      class="bg-blue-300",
      ref="drawingElement"
    )
      p TEST
    //- div(class="absolute cursor-pointer -bottom-1 -right-1 rounded-full h-2 w-2 bg-red-500")
</template>

<script setup>
const controlPoints = [
  'LT', 'CT', 'RT', 'RC', 'RB', 'CB', 'LB', 'LC',
]

const pointPosition = (type) => {
  let returnStyle = '';
  switch (type) {
    case 'LT':
      returnStyle = 'left-0 top-0';
      break;
    case 'CT':
      returnStyle = 'left-1/2 top-0';
      break;
    case 'RT':
      returnStyle = 'left-full top-0';
      break;
    case 'RC':
      returnStyle = 'left-full top-1/2';
      break;
    case 'RB':
      returnStyle = 'left-full top-full';
      break;
    case 'CB':
      returnStyle = 'left-1/2 top-full';
      break;
    case 'LB':
      returnStyle = 'left-0 top-full';
      break;
    case 'LC':
      returnStyle = 'left-0 top-1/2';
      break;
    default:
      break;
  }
  return returnStyle;
}

const isDragging = ref(false);
const movePointType = ref('');
const handleMouseDown = (type) => {
  movePointType.value = type
  isDragging.value = true;
}
const handleMouseUp = () => {
  isDragging.value = false;
}

const updateTransformation = () => {
  // const element = drawingElement.value;
  // const transformValue = `polygon(${controlPoints.value.map((point) => point.x + 'px ' + point.y + 'px').join(', ')})`;

  // element.style.clipPath = transformValue;
}

const drawingContainer = ref(null)
const drawingElement = ref(null)
const handleMouseMove = (event) => {
  if (isDragging.value) {
    const container = drawingContainer.value;
    const mouseX = event.clientX - container.offsetLeft;
    const mouseY = event.clientY - container.offsetTop;
    const element = drawingElement.value;

    switch(movePointType.value) {
      case 'LT':
        element.classList.remove('absolute');
      case 'CT':
      case 'RT':
      case 'RC':
      case 'RB':
      case 'CB':
      case 'LB':
      case 'LC':
    }

    // controlPoints.value[movePointIndex.value].x = Math.max(0, Math.min(container.clientWidth, mouseX));
    // controlPoints.value[movePointIndex.value].y = Math.max(0, Math.min(container.clientHeight, mouseY));

    // console.log(controlPoints, 'controlPoints');

    // updateTransformation();
  }
}

// onMounted(() => {
//   updateTransformation();
// })
</script>