import { FC } from "react"
import style from './skeleton.module.scss'

export const Skeleton: FC = () => {
  return (
    <div className={style.skeleton}>
        <div className={style.skeleton__image}></div>
        <div className={style.skeleton__info}>
            <div className={style.skeleton__title}></div>
            <div className={style.skeleton__price}></div>
        </div>
    </div>
  )
}
