import React, { Component } from 'react'
import { DispatchProp, connect } from 'react-redux'
import cx from 'classnames'
import styles from './Connect.css'
import { TitleBar } from '../TitleBar';
import { IAppState } from '../../reducers/index';
import { MenuButton } from '../menu/MenuButton';

interface IProps {
  className?: string
}

type PrivateProps = IProps & DispatchProp<IAppState>

class _Connect extends Component<PrivateProps> {
  render(): JSX.Element {
    return (
      <div className={styles.container}>
        <TitleBar className={styles.titlebar} />

        <p>Connecting&hellip;</p>
        <MenuButton icon="x" size="medium">Cancel</MenuButton>
      </div>
    )
  }
}

export const Connect = connect()(_Connect) as React.ComponentClass<IProps>