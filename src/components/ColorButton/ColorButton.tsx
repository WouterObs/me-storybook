import React, { ReactElement } from 'react';
/**
 * ColorButton props Interface.
 * @export
 * @interface IProps
 */
export interface IProps {
  /**
   * ColorButton className prop.
   * @type {string}
   * @memberof IProps
   */
  className?: string;
  /**
   * ColorButton style color prop.
   * @type {string}
   * @memberof IProps
   */
  btnColor: string;
  /**
   * ColorButton onClick handler prop.
   * @memberof IProps
   */
  onClick?: (btnColor: string) => void;
}

/**
 * ColorButton Functional Component.
 * @param {IProps} props
 * @return {*}  {ReactElement}
 */
export const ColorButton: React.FC<IProps> = (props: IProps): ReactElement => {
  const { className, btnColor, onClick } = props;
  return (
    <button
      className={className}
      style={{ color: btnColor }}
      onClick={() => onClick && onClick(btnColor)}
    >
      Color Button
    </button>
  );
};
