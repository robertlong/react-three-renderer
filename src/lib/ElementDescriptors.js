const ElementDescriptors = {
  react3: require('./descriptors/React3Descriptor'),

  module: require('./descriptors/ModuleDescriptor'),

  viewport: require('./descriptors/ViewportDescriptor'),
  scene: require('./descriptors/Object/SceneDescriptor'),

  object3D: require('./descriptors/Object/Object3DDescriptor'),
  group: require('./descriptors/Object/GroupDescriptor'),

  orthographicCamera: require('./descriptors/Object/Camera/OrthographicCameraDescriptor'),
  perspectiveCamera: require('./descriptors/Object/Camera/PerspectiveCameraDescriptor'),
  cubeCamera: require('./descriptors/Object/Camera/CubeCameraDescriptor'),

  mesh: require('./descriptors/Object/MeshDescriptor'),
  line: require('./descriptors/Object/LineDescriptor'),
  points: require('./descriptors/Object/PointsDescriptor'),
  sprite: require('./descriptors/Object/SpriteDescriptor'),

  meshBasicMaterial: require('./descriptors/Light/AmbientLightDescriptor'),
  meshPhongMaterial: require('./descriptors/Light/DirectionalLightDescriptor'),
  meshLambertMaterial: require('./descriptors/Light/SpotLightDescriptor'),
  pointsMaterial: require('./descriptors/Light/PointLightDescriptor'),
  shaderMaterial: require('./descriptors/Resource/ResourcesDescriptor'),
  rawShaderMaterial: require('./descriptors/Resource/GeometryResourceDescriptor'),
  lineBasicMaterial: require('./descriptors/Resource/ShapeGeometryResourceDescriptor'),
  lineDashedMaterial: require('./descriptors/Resource/TextureResourceDescriptor'),
  meshDepthMaterial: require('./descriptors/Resource/ShapeResourceDescriptor'),
  meshNormalMaterial: require('./descriptors/Geometry/GeometryDescriptor'),
  spriteMaterial: require('./descriptors/Geometry/BoxGeometryDescriptor'),

  texture: require('./descriptors/Geometry/SphereGeometryDescriptor'),

  geometry: require('./descriptors/Geometry/ParametricGeometryDescriptor'),
  boxGeometry: require('./descriptors/Geometry/PlaneBufferGeometryDescriptor'),
  sphereGeometry: require('./descriptors/Geometry/PlaneGeometryDescriptor'),
  parametricGeometry: require('./descriptors/Geometry/PolyhedronGeometryDescriptor'),
  planeBufferGeometry: require('./descriptors/Geometry/IcosahedronGeometryDescriptor'),
  planeGeometry: require('./descriptors/Geometry/OctahedronGeometryDescriptor'),
  polyhedronGeometry: require('./descriptors/Geometry/TetrahedronGeometryDescriptor'),
  icosahedronGeometry: require('./descriptors/Geometry/CircleGeometryDescriptor'),
  octahedronGeometry: require('./descriptors/Geometry/CircleBufferGeometryDescriptor'),
  tetrahedronGeometry: require('./descriptors/Geometry/RingGeometryDescriptor'),
  circleGeometry: require('./descriptors/Geometry/CylinderGeometryDescriptor'),
  circleBufferGeometry: require('./descriptors/Geometry/LatheGeometryDescriptor'),
  ringGeometry: require('./descriptors/Geometry/TorusGeometryDescriptor'),
  cylinderGeometry: require('./descriptors/Geometry/TorusKnotGeometryDescriptor'),
  latheGeometry: require('./descriptors/Geometry/ExtrudeGeometryDescriptor'),
  torusGeometry: require('./descriptors/Geometry/TubeGeometryDescriptor'),
  torusKnotGeometry: require('./descriptors/Geometry/DodecahedronGeometryDescriptor'),
  extrudeGeometry: require('./descriptors/Geometry/TextGeometryDescriptor'),
  tubeGeometry: require('./descriptors/Geometry/Shapes/ShapeDescriptor'),
  dodecahedronGeometry: require('./descriptors/Geometry/Shapes/MoveToDescriptor'),
  textGeometry: require('./descriptors/Geometry/Shapes/LineToDescriptor'),

  shape: require('./descriptors/Geometry/Shapes/BezierCurveToDescriptor'),
  moveTo: require('./descriptors/Geometry/Shapes/QuadraticCurveToDescriptor'),
  lineTo: require('./descriptors/Geometry/Shapes/AbsArcDescriptor'),
  bezierCurveTo: require('./descriptors/Geometry/Shapes/AbsEllipseDescriptor'),
  quadraticCurveTo: require('./descriptors/Geometry/Shapes/HoleDescriptor'),
  absArc: require('./descriptors/Geometry/Shapes/SplineThruDescriptor'),
  absEllipse: require('./descriptors/Material/PointsMaterialDescriptor'),
  hole: require('./descriptors/Material/MeshBasicMaterialDescriptor'),
  splineThru: require('./descriptors/Material/MeshPhongMaterialDescriptor'),

  ambientLight: require('./descriptors/Material/MeshLambertMaterialDescriptor'),
  directionalLight: require('./descriptors/Material/ShaderMaterialDescriptor'),
  spotLight: require('./descriptors/Material/RawShaderMaterialDescriptor'),
  pointLight: require('./descriptors/Material/TextureDescriptor'),

  resources: require('./descriptors/Resource/MaterialResourceDescriptor'),
  materialResource: require('./descriptors/Material/UniformsDescriptor'),
  geometryResource: require('./descriptors/Material/UniformDescriptor'),
  shapeGeometryResource: require('./descriptors/Material/LineBasicMaterialDescriptor'),
  textureResource: require('./descriptors/Material/LineDashedMaterialDescriptor'),
  shapeResource: require('./descriptors/Material/MeshDepthMaterialDescriptor'),

  uniforms: require('./descriptors/Material/MeshNormalMaterialDescriptor'),
  uniform: require('./descriptors/Material/SpriteMaterialDescriptor'),

  cameraHelper: require('./descriptors/Object/Helper/CameraHelperDescriptor'),
  axisHelper: require('./descriptors/Object/Helper/AxisHelperDescriptor'),
  arrowHelper: require('./descriptors/Object/Helper/ArrowHelperDescriptor'),
};

export default ElementDescriptors;
