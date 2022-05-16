import { mathMod } from 'ramda';
import React, { ReactChildren } from 'react';
import { useState, useEffect, useRef, CSSProperties } from 'react';

// Styles
import styles from "./styles.css";

interface GlossaryNavProps {

}

const GlossaryNav: StorefrontFunctionComponent<GlossaryNavProps> = ({ }) => {

  useEffect(() => {
    console.clear();
  })

  const goToLetter = (e: any) => {
    const letter = e.target.innerText.toLowerCase();

    disappearHeadroom();

    //@ts-expect-error
    document.location.href = "#letter-" + ((letter !== "#") ? letter : "numeral");
    console.log("Woof")
  }

  const disappearHeadroom = () => {
    // Prevents the Head Room app from covering the scrolled to content - LM

    //@ts-expect-error
    const headRoom: any = document.getElementsByClassName("headroom")[0];
    headRoom.style.position = "static";
  }

  return (
    <nav>
      <div className={styles.glossaryContainer}>
        <div className={styles.glossaryColumnOne}>
          <div className={styles.colOneContainer}>
            <div className={styles.letter} onClick={goToLetter}>#</div>
            <div className={styles.letter} onClick={goToLetter}>A</div>
            <div className={styles.letter} onClick={goToLetter}>B</div>
            <div className={styles.letter} onClick={goToLetter}>C</div>
            <div className={styles.letter} onClick={goToLetter}>D</div>
            <div className={styles.letter} onClick={goToLetter}>E</div>
            <div className={styles.letter} onClick={goToLetter}>F</div>
            <div className={styles.letter} onClick={goToLetter}>G</div>
            <div className={styles.letter} onClick={goToLetter}>H</div>
            <div className={styles.letter} onClick={goToLetter}>I</div>
            <div className={styles.letter} onClick={goToLetter}>J</div>
            <div className={styles.letter} onClick={goToLetter}>K</div>
            <div className={styles.letter} onClick={goToLetter}>L</div>
            <div className={styles.letter} onClick={goToLetter}>M</div>
          </div>
        </div>
        <div className={styles.glossaryColumnTwo}>
          <div className={styles.colTwoContainer}>
            <div className={styles.letter} onClick={goToLetter}>N</div>
            <div className={styles.letter} onClick={goToLetter}>O</div>
            <div className={styles.letter} onClick={goToLetter}>P</div>
            <div className={styles.letter} onClick={goToLetter}>Q</div>
            <div className={styles.letter} onClick={goToLetter}>R</div>
            <div className={styles.letter} onClick={goToLetter}>S</div>
            <div className={styles.letter} onClick={goToLetter}>T</div>
            <div className={styles.letter} onClick={goToLetter}>U</div>
            <div className={styles.letter} onClick={goToLetter}>V</div>
            <div className={styles.letter} onClick={goToLetter}>W</div>
            <div className={styles.letter} onClick={goToLetter}>X</div>
            <div className={styles.letter} onClick={goToLetter}>Y</div>
            <div className={styles.letter} onClick={goToLetter}>Z</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

GlossaryNav.schema = {
  title: 'editor.glossarynav.title',
  description: 'editor.glossarynav.description',
  type: 'object',
  properties: {}
}

export default GlossaryNav;
