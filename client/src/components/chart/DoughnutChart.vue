<script setup lang="ts">
export interface DataSet {
  total: number
  data: number[]
}

const props = withDefaults(
  defineProps<{
    data: DataSet | null
    baseColor: string
    colors: string[]
  }>(),
  {}
)

const radius = 60

const d = () => {
  return Math.PI * radius * 2
}

const circles = (): {
  dash: number
  offset: number
  color: string
  data: number
}[] => {
  const data = props.data?.data ?? []
  const total = props.data?.total ?? data.reduce((carry, d) => carry + d)
  const colors = props.colors ?? []
  let beforeOffset = 0
  return data
    .map((data, dataIndex) => {
      const dash = (data / total) * d()
      const offset = beforeOffset
      beforeOffset += dash
      return {
        dash,
        offset,
        data,
        color:
          colors.length === 0 ? '#000000' : colors[dataIndex % colors.length],
      }
    })
    .reverse()
    .filter((d) => d.data > 0)
}
</script>
<template>
  <div class="relative">
    <svg class="w-full h-auto" width="200" height="200" viewBox="0 0 200 200">
      <g name="doughnut">
        <circle
          cx="100"
          cy="100"
          :r="radius"
          fill="none"
          :stroke="props.baseColor"
          :stroke-width="35"
        />
        <circle
          v-for="(circle, datasetIndex) in circles()"
          :key="`${datasetIndex}`"
          cx="100"
          cy="100"
          :r="radius"
          fill="none"
          :stroke="circle.color"
          :stroke-width="35"
          :stroke-dasharray="`${circle.dash} ${d() - circle.dash}`"
          :stroke-dashoffset="-d() + circle.dash + circle.offset + d()"
        />
      </g>
    </svg>
  </div>
</template>
