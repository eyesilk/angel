import { FC } from 'react'
import { cross } from '../../assets'
import './button-cross.scss'

interface ButtonCrossProps {
  onClick?: (...args: any[]) => any;
}

export const ButtonCross: FC<ButtonCrossProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className='button-cross'>
        <img src={cross} alt="close button" />
    </button>
  )
}
