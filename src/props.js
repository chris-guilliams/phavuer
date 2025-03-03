const props = {
  active: { type: Boolean },
  visible: { type: Boolean },
  x: { type: Number },
  y: { type: Number },
  x1: { type: Number },
  y1: { type: Number },
  x2: { type: Number },
  y2: { type: Number },
  rotation: { type: Number },
  origin: { type: Number },
  originX: { type: Number },
  originY: { type: Number },
  scale: { type: Number },
  scaleX: { type: Number },
  scaleY: { type: Number },
  width: { type: Number },
  height: { type: Number },
  radius: { type: Number },
  displayWidth: { type: Number },
  displayHeight: { type: Number },
  displayOriginX: { type: Number },
  displayOriginY: { type: Number },
  dropZone: { type: Boolean },
  flipX: { type: Boolean },
  flipY: { type: Boolean },
  depth: { type: Number },
  alpha: { type: Number },
  blendMode: { type: [Number, String] },
  pipeline: { type: [String, Object] },
  intensity: { type: Number },
  tint: { type: Number },
  text: { type: [String, Number] },
  texture: { type: String },
  frame: { type: [Number, String] },
  color: { type: String },
  fillColor: { type: Number },
  fillAlpha: { type: Number },
  lineWidth: { type: Number },
  strokeColor: { type: Number },
  strokeAlpha: { type: Number },
  style: { type: Object },
  lineSpacing: { type: Number },
  padding: { type: [Number, Object] },
  collision: { type: [Number, Array] },
  collisionByProperty: { type: Object },
  // Body
  enable: { type: Boolean },
  immovable: { type: Boolean },
  moves: { type: Boolean },
  bounceX: { type: Number },
  bounceY: { type: Number },
  drag: { type: Number },
  dragX: { type: Number },
  dragY: { type: Number },
  gravityX: { type: Number },
  gravityY: { type: Number },
  frictionX: { type: Number },
  frictionY: { type: Number },
  velocityX: { type: Number },
  velocityY: { type: Number },
  maxVelocityX: { type: Number },
  maxVelocityY: { type: Number },
  accelerationX: { type: Number },
  accelerationY: { type: Number },
  offsetX: { type: Number },
  offsetY: { type: Number },
  // Tween
  tween: { type: Object },
  tweens: { type: Array },
  timeline: { type: Object },
  addable: { type: Boolean }
}
const propsEntries = Object.entries(props)
export const mapProps = (...names) => {
  const nameSet = new Set(names)
  return Object.fromEntries(
    propsEntries.filter(([name]) => nameSet.has(name))
  )
}
export const gameObjectProps = mapProps(
  'tween', 'tweens', 'timeline',
  'visible',
  'x', 'y',
  'rotation',
  'origin', 'originX', 'originY',
  'displayOriginX', 'displayOriginY',
  'scale', 'scaleX', 'scaleY',
  'displayWidth', 'displayHeight',
  'scrollFactor', 'scrollFactorX', 'scrollFactorY',
  'dropZone',
  'depth',
  'alpha', 'blendMode', 'pipeline',
  'addable'
)
