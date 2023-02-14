declare module '*.svg?url' {
  import type { ComponentType, SVGProps } from 'react';

  type SvgComponent = ComponentType<SVGProps>;

  const Svg: SvgComponent;

  export = Svg;
}
