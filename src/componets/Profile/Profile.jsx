import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
  <div>
    <img
      src={image}
      alt={name} 
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{ location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span className={css.stats}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={css.stats}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={css.stats}>{stats.likes}</span>
    </li>
  </ul>
</div>

    )
}