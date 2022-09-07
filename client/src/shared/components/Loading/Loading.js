import loading from "shared/assets/images/loader.png";
import styles from "./loading.module.scss";

function Loading({ width = 128 }) {
  return (
    <div className={`${styles.parent} user-select-none`}>
      <div>
        <img className="img-fluid" src={loading} width={width} alt="loading" />
      </div>
    </div>
  );
}

export default Loading;
