import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// !! LIGHT
export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'Description lorem ipsum dolor sit amet, consectetur adipiscing',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description lorem ipsum dolor sit amet, consectetur adipiscing',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum dolor sit amet, consectetur adipiscing',
};

// !! DARK
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'Description lorem ipsum dolor sit amet, consectetur adipiscing',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description lorem ipsum dolor sit amet, consectetur adipiscing',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum dolor sit amet, consectetur adipiscing',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

// !! ERROR
export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'Description lorem ipsum dolor sit amet, consectetur adipiscing',
    theme: TextTheme.ERROR,
};
