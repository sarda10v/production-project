import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const randomValue = () => {
        dispatch(counterActions.randomValue());
    };
    const clearValue = () => {
        dispatch(counterActions.clearValue());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {t('value')} {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {t('decrement')}
            </Button>
            <Button onClick={randomValue}>{t('randomValue')}</Button>
            <Button data-testid="clear-btn" onClick={clearValue}>
                {t('clearValue')}
            </Button>
        </div>
    );
};
