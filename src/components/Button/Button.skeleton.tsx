import React from 'react'

import Button from './ElementType/Button'
import Link from './ElementType/Link'
import type { ButtonProps } from './Button.types'

export default function ButtonSkeleton(props: ButtonProps) {
	return props.elementType === 'a' ? <Link {...props} /> : <Button {...props} />
}
