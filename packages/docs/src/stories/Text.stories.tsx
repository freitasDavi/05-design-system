import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@tkn-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt necessitatibus, accusamus praesentium vitae fuga quidem quasi reprehenderit, aliquam pariatur nam ab ipsam quibusdam quos quis et alias consequuntur recusandae!',
        size: 'md'
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    }
} as Meta<TextProps>


export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}
