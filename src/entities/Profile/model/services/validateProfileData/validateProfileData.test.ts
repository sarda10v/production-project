import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 23,
    country: Country.Ukraine,
    lastname: 'Ibragim',
    firstname: 'Sardalov',
    city: 'Grozny',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and last name', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
