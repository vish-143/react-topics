import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Auth, previousImage, nextImage } from "../redux/actionCreator"

function Main() {
  const key = useSelector(state => state.auth.toggle)
  const countOne = useSelector(state => state.image.count)
  console.log(countOne)
  const image = [{ name: "First Image", id: 1, image: "https://png.pngtree.com/png-vector/20210224/ourlarge/pngtree-customer-login-avatar-png-image_2939385.jpg" },
  { name: "Second Image", id: 2, image: "https://a0.anyrgb.com/pngimg/1772/1960/material-design-icon-user-profile-avatar-ico-flat-facebook-icon-design-conversation-forehead.png" },
  { name: "Third Image", id: 3, image: "https://www.whooming.com/assets/img/avatar_unknow@3x.png" },
  { name: "Fourth Image", id: 4, image: "https://media.istockphoto.com/id/1426381602/photo/lovebird-closeup-parrot-with-blur-background.webp?b=1&s=170667a&w=0&k=20&c=Bvf86ZV9XvTgnTqSj7vi6wU_ot9-v-Qmxfp_34ViLYE=" },
  { name: "Fifth Image", id: 5, image: "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg" },
  { name: "Sixth Image", id: 6, image: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" },
  { name: "Seventh Image", id: 7, image: "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_1280.jpg" },
  { name: "Eighth Image", id: 8, image: "https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219_1280.jpg" },
  { name: "Ninth Image", id: 9, image: "https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736_1280.jpg" },
  { name: "Tenth Image", id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxk7ZmrpuIEsfSGqmxkLKXxKcyRr0vRjHrrnfC7Lcr&s" }
  ]
console.log(image[countOne].image)
  // let filteredMap = image.map((element, index) => {
  //   if (index === countOne) {
  //     return element.image
  //   }
  // }
  // )
  // filteredMap = filteredMap.filter(ele => ele)
  // console.log(filteredMap);
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(Auth())}>{key ? "Log Out" : "Log in"}</button>
      {
        key ?
          <div>
            {countOne === 0 ? <div></div> : <button onClick={() => dispatch(previousImage())}>Previous</button>}
            <img src={image[countOne].image} width={"100px"} height={"100px"} alt="URL"></img>
            {countOne === image.length - 1 ? <div></div> : <button onClick={() => dispatch(nextImage())}>Next</button>}
          </div>
          :
          <div>"Not Authorized"</div>
      }
    </div>
  )
}
export default Main
