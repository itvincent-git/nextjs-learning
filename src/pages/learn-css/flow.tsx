import styles from "@/styles/Flow.module.css";

export default function Flex() {
  return (
    <>
      <h1>Flex</h1>
      <div className={styles.twocolumn}>
        <div className={styles.container}>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste,
            in, excepturi, quod corporis nulla reiciendis nostrum ipsa quis
            nobis quasi? Illo suscipit distinctio voluptatem rem hic praesentium
            quaerat? Dicta!
          </div>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </div>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste,
            in, excepturi,{" "}
          </div>
          <div className={styles.item}>Lorem ipsum dolor</div>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </div>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste,
            in, excepturi, quod corporis nulla reiciendis
          </div>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste,
            in, excepturi, quod corporis nulla reiciendis nostrum ipsa quis
            nobis quasi? Illo suscipit
          </div>
          <div className={styles.item}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste,
            in,{" "}
          </div>
        </div>
      </div>
    </>
  );
}
