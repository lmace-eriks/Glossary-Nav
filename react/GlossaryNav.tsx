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

  return (
    <nav>
      <h1>Hello World!</h1>
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
