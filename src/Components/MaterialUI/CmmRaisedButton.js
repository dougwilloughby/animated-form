/**
 * Created by willo on 2/22/2017.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export const CmmRaisedButton = (props) => (
  <RaisedButton
    {...props}
    style={{borderRadius: 30, padding: 0}} buttonStyle={{borderRadius: 30, padding: 0}}
  />
)

export default CmmRaisedButton;