import { ReactNode } from 'react'

type VariantsTypes = 'primary' | 'secondary'

type SizesTypes = 'small' | 'medium' | 'large'

type FullWidthPerBreakpoint = {
	small: boolean
	medium?: boolean
	large?: boolean
}

export type ButtonProps = {
	isDisabled?: boolean
	children: ReactNode
	variant?: VariantsTypes
	size?: SizesTypes
	fullWidth?: boolean | FullWidthPerBreakpoint
} & (
	| {
			elementType: 'a'
			href: string
			target: '_blank' | '_self'
	  }
	| {
			elementType: 'button'
			onPress: () => void
			type: 'button' | 'submit' | 'reset'
	  }
)
