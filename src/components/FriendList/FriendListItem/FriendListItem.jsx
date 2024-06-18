import clsx  from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.container}>
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
            <p className={clsx(isOnline ? css.online : css.offline)}>{isOnline ? "Online " : "Offline"}</p>
</div>
    )
}