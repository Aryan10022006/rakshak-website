import base64

# The base64 data URL for cloud.png
satelite = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABUElEQVR4nO3bQUrDUBSF4ffEuVmY7taF1RU8R4UiUYil3Nye7xuVjA7Nn0BpMgYAAAAAAAAAAAAAAAAAANDDrB5Qaa21rp/nnJHfxUv1AGoJIJwAwgkgnADCCSCcAMIJIJwAwgkgnADCCSCcAMIJIFzLv0DXWu/VG34z5/ys3nDEa/WAO3xVD9jxVj3gqM4BjDHGpXrAja16wH90D2CMc9wJ2l35V88QwBi1EbQ9+WM0COD2ub0bHzvHLg+esmf7eWBv75mfN/QzMJwAwgkgnADCCSCcAMIJIJwAwgkgnADCCSCcAMIJIJwAwgkgnADCCSCcAMIJIJwAwp0+gLmjetNfuu09fQA8lgDCCSCcAMIJIJwAwgkg3OlfDj1gqx7Q0bME0PoV7UrPEICTf4fuAWzVA7rrHIArHwAAAAAAAAAAAAAAAAAAAAAAAAAAAGjvG7ffFj2+FRE+AAAAAElFTkSuQmCC'
# Save as cloud.png
header, encoded = satelite.split(",", 1)
data = base64.b64decode(encoded)
with open("satellite.png", "wb") as f:
    f.write(data)

print("cloud.png saved successfully!")
