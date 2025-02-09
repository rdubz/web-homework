import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { settingsStyles } from '../../styles/global'

export function Settings () {
  const [isChecked, setIsChecked] = useState(checkSetting())

  function handleSettingChanged (isEnabled) {
    if (isEnabled) {
      localStorage.setItem('displayRomanNumerals', true)
    } else {
      localStorage.setItem('displayRomanNumerals', false)
    }

    setIsChecked(isEnabled)
  }

  // need to initialize the state to have the slider setting persist
  function checkSetting () {
    let enabled = localStorage.getItem('displayRomanNumerals')

    if (enabled === null || enabled === 'false') {
      return false
    } else {
      return true
    }
  }

  return (
    <div className='userSettingsForm' css={settingsStyles}>
      <div className='settingsContainer'>
        <h1>User Settings</h1>
        <FormGroup className='formGroup'>
          <FormControlLabel control={<Switch checked={isChecked} onClick={(e) => handleSettingChanged(e.target.checked)} />} label='Display Numbers as Roman Numerals' />
        </FormGroup>
      </div>
    </div>
  )
}
