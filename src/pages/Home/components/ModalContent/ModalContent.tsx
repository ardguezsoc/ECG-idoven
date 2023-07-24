import { useState, FC } from 'react';
import { Text } from '../../../../components/Text';
import { Box } from '@mui/material';
import { Input, Switch } from '../../../../components/Form';
import { Button } from '../../../../components/Button';
import { StyledModalContent } from './Modal.styled';
import { useTranslation } from 'react-i18next';

export const ModalContent: FC<{
  submitForm: (switchValue: boolean, inputValue: number) => void;
  switchValue: boolean;
  inputValue: number;
}> = ({ submitForm, switchValue, inputValue }) => {
  const [internalSwitchValue, setInternalSwitchValue] = useState(switchValue);
  const [internalInputValue, setInternalInputValue] = useState(inputValue.toString());
  const { t } = useTranslation();

  return (
    <StyledModalContent>
      <Text variant="h5">{t('form.title')}</Text>
      <Box id="stepsContainer">
        <Text variant="h6">{t('form.input')}</Text>
        <Input
          onChange={(event) => setInternalInputValue(event.target.value)}
          type="number"
          min={1}
          defaultValue={internalInputValue}
        />
      </Box>
      <Box id="chartModeContainer">
        <Text variant="h6">{t('form.switch')}</Text>
        <Switch onChange={setInternalSwitchValue} value={internalSwitchValue} />
      </Box>
      <Button onClick={() => submitForm(internalSwitchValue, parseInt(internalInputValue))}>{t('form.button')}</Button>
    </StyledModalContent>
  );
};
