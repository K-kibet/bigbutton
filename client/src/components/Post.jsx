
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:8800/blogs/";
  return (
      <div class="card">
        <div class="card__thumb"><a href="javascript:;"><img class="animate" src="https://picsum.photos/800?random=1"/></a></div>
        <div class="card__content">
          <h2 class="card__title animate"><a href="javascript:;">Card Title</a></h2>
          <p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic,.</p>
          <button class="card__btn"><i class="fa-solid fa-arrow-right fa-fw"></i></button>
        </div>
      </div>
  );
}