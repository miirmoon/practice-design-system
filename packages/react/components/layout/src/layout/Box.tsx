import { vars } from '@miirmoon/themes';
import * as clsx from 'clsx';
import { Ref, createElement, forwardRef } from 'react';
import { StyleSprinkles } from '../core/style.css';
import { extractSprinkleProps } from '../utils/properties';
import { BoxProps } from './types';

const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as = 'div', color, background, children } = props;

  return createElement(as, {
    ...props, ref, className: clsx([
      StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))),
      props.className
    ]),
    style: {
      color: vars.colors.$scale?.[color]?.[700] ?? color,
      backgroundColor: vars.colors.$scale?.[background]?.[700] ?? background,
      ...props.style
    }
  },
  children);
}

const _Box = forwardRef(Box);
export { _Box as Box };
