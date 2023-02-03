import React from "react";
import { MasonryGrid } from "@egjs/react-grid";
import styles from '@/styles/MasonryGrid.module.css'

export default function MasonryGridApp() {
  return (
    <MasonryGrid
      className={styles.container}
      gap={5}
      defaultDirection={"end"}
      align={"start"}
      column={2}
      columnSize={0}
      columnSizeRatio={0}
      onRenderComplete={(e) => {
        console.log(e);
      }}
    >
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>6</div>
      <div className={styles.item}>7</div>
      <div className={styles.item}>8</div>
      <div className={styles.item}>9</div>
      <div className={styles.item}>10</div>
    </MasonryGrid>
  );
}
