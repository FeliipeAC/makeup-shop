import Button from "@mui/material/Button";
import { Makeup } from "../../utils/models/makeup.type";
import Rating from "@mui/material/Rating";

import "./styles.css";

type Props = {
  data: Makeup;
};

export function CardMakeup({ data }: Props) {
  return (
    <div className="card">
      <div className="media">
        <img src={data.api_featured_image} alt="" />
      </div>

      <div className="content">
        {data?.category && <div className="category">{data.category}</div>}
        <h1>{data.name}</h1>
        <Rating
          name="read-only"
          value={data.rating | 0}
          readOnly
          precision={0.5}
        />
        <div className="buy-container">
          <div>
            {data.brand && (
              <span className="info">
                <b>{data.brand}</b> |{" "}
              </span>
            )}

            <span className="info">{data.product_colors.length} colors</span>
          </div>
          <p>
            {data.price_sign} {data.price}
          </p>
        </div>

        <div className="actions">
          <Button variant="outlined" size="large">
            View more
          </Button>

          <Button variant="contained" size="large" disableElevation>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
