import type {
  ElementType,
  ComponentProps,
  ComponentClass,
  ComponentType,
  JSXElementConstructor,
  FC,
  Ref,
} from "react";
import type { Interpolation } from "@emotion/styled";
import type { EmotionTheme } from "@themes/emotion-theme";
// types

import _styled from "@emotion/styled";

export * from "@emotion/react";
// styled

export interface ComponentSelector {
  __emotion_styles: any;
}

export type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, ComponentProps<C>>;

/** Same as StyledOptions but shouldForwardProp must be a type guard */
export interface FilteringStyledOptions<
  Props = Record<string, any>,
  ForwardedProps extends keyof Props & string = keyof Props & string
> {
  label?: string;
  shouldForwardProp?: (propName: string) => propName is ForwardedProps;
  target?: string;
}

// eslint-disable-next-line no-unused-vars
export interface StyledOptions<Props = Record<string, any>> {
  label?: string;
  shouldForwardProp?: (propName: string) => boolean;
  target?: string;
}

/**
 * @typeparam ComponentProps  Props which will be included when withComponent is called
 * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
 */
export interface StyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {}
> extends FC<ComponentProps & SpecificComponentProps & JSXProps>,
    ComponentSelector {
  withComponent<C extends ComponentClass<React.ComponentProps<C>>>(
    component: C
  ): StyledComponent<
    ComponentProps & PropsOf<C>,
    {},
    { ref?: Ref<InstanceType<C>> }
  >;
  withComponent<C extends ComponentType<React.ComponentProps<C>>>(
    component: C
  ): StyledComponent<ComponentProps & PropsOf<C>>;
  withComponent<Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag
  ): StyledComponent<ComponentProps, JSX.IntrinsicElements[Tag]>;
}

/**
 * @typeparam ComponentProps  Props which will be included when withComponent is called
 * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
 */
export interface CreateStyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {}
> {
  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends {} = {}>(
    ...styles: Array<
      Interpolation<
        ComponentProps &
          SpecificComponentProps &
          AdditionalProps & { theme: EmotionTheme }
      >
    >
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >;

  (
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<
        ComponentProps & SpecificComponentProps & { theme: EmotionTheme }
      >
    >
  ): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;

  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends {}>(
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<
        ComponentProps &
          SpecificComponentProps &
          AdditionalProps & { theme: EmotionTheme }
      >
    >
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >;
}

/**
 * @desc
 * This function accepts a React component or tag ('div', 'a' etc).
 *
 * @example styled(MyComponent)({ width: 100 })
 * @example styled(MyComponent)(myComponentProps => ({ width: myComponentProps.width })
 * @example styled('div')({ width: 100 })
 * @example styled('div')<Props>(props => ({ width: props.width })
 */
export interface BaseCreateStyled {
  <
    C extends ComponentClass<ComponentProps<C>>,
    ForwardedProps extends keyof ComponentProps<C> &
      string = keyof ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: EmotionTheme;
    },
    {},
    {
      ref?: Ref<InstanceType<C>>;
    }
  >;

  <C extends ComponentClass<ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: EmotionTheme;
    },
    {},
    {
      ref?: Ref<InstanceType<C>>;
    }
  >;

  <
    C extends ComponentType<ComponentProps<C>>,
    ForwardedProps extends keyof ComponentProps<C> &
      string = keyof ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: EmotionTheme;
    }
  >;

  <C extends ComponentType<ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: EmotionTheme;
    }
  >;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] &
      string = keyof JSX.IntrinsicElements[Tag] & string
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
  ): CreateStyledComponent<
    { theme?: EmotionTheme; as?: ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>
  ): CreateStyledComponent<
    { theme?: EmotionTheme; as?: ElementType },
    JSX.IntrinsicElements[Tag]
  >;
}

export type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: EmotionTheme;
      as?: ElementType;
    },
    JSX.IntrinsicElements[Tag]
  >;
};

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

const styled: CreateStyled = _styled;

export default styled;
