interface ConfigFields {
  width: number,
  height: number,
  singleSegment: number
}

interface CanvasConfig {
  config: ConfigFields,
  setCanvasConfig: (config: ConfigFields) => void,
}

const canvasConfig: CanvasConfig = {
  config: {
    width: 0,
    height: 0,
    singleSegment: 20,
  },
  setCanvasConfig(config: ConfigFields) {
    this.config = config
  },
}

export default canvasConfig
