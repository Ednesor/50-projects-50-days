import Image from 'next/image'
import React from 'react'
import style from "./ExpandingCards-style.module.css"

export default function ExpandingCards() {
  return (
    <div className={style.container_ext}>
      <div className={style.container}>
        <Image className={style.image} rel="preload" src={"https://fastly.picsum.photos/id/67/600/600.jpg?hmac=h85100EXELyyBDAn-OkFw0KMOZqljh8RWAKIoo0fTj0"} as="image" alt='image-1' width={600} height={600} />
        <Image className={style.image} src={"https://fastly.picsum.photos/id/906/600/600.jpg?hmac=-pZP67W1OKTygHivRaUZ2gYizUNK5IdPw5JnaPcStWI"} alt='image-2' width={600} height={600}></Image>
        <Image className={style.image} src={"https://fastly.picsum.photos/id/1019/600/600.jpg?hmac=ZbYhhnXjv_IzSU9s_7IRToZWrBuExs1-WDoMzm56X5Y"} alt='image-3' width={600} height={600}></Image>
        <Image className={style.image} src={"https://fastly.picsum.photos/id/43/600/600.jpg?hmac=HTh9geN5CxVyIKRwno4I4OxtBpnNOuOJgvUdlYXQLcA"} alt='image-4' width={600} height={600}></Image>
        <Image className={style.image2} src={"https://fastly.picsum.photos/id/847/600/600.jpg?hmac=xXQyTqGY2Bpx9j3ZrVSBRkXG31izQ3b7GXRsoyQxFWk"} alt='image-5' width={600} height={600}></Image>
      </div>
    </div>
  )
}
