import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@tkn-ui/react";

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: "https://github.com/freitasDavi.png",
        alt: "Davi Freitas"
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: '',
    }
};
