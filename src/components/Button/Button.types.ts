import { ReactNode } from 'react'

type VariantsTypes = 'primary' | 'secondary'

export type ButtonProps = {
	isDisabled?: boolean
	children: ReactNode
	variant?: VariantsTypes
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
