"use client";
import React, { Dispatch, SetStateAction } from "react";
import styles from "@/_styles/switch.module.css";
interface ISwitch {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
export const Switch: React.FC<ISwitch> = ({ active, setActive }) => {
  return (
    <div
      className={styles.main}
      onClick={() => {
        setActive((prev) => !prev);
      }}
      style={{
        border: active ? "2px solid rebeccapurple" : "2px solid orange",
        backgroundColor: active ? "violet" : "#f9f9ae",
      }}
    >
      <div
        className={styles.toggle_wrapper}
        style={{
          width: active ? "100%" : "32px",
          height: active ? "50px" : "32px",
        }}
      >
        <div className={styles.toggle}>
          <div
            className={styles.emoji}
            style={{
              width: active ? "50px" : "30px",
              fontSize: active ? "50px" : "30px",
            }}
          >
            {active ? (
              <span className={styles.emoji_beast}>😈</span>
            ) : (
              <span className={styles.emoji_human}>🙂</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
