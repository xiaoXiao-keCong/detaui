export interface IDateButton{
	type: 'default' | 'primary' | 'error' | 'warning' | 'info'
	onClick?: (event: MouseEvent) => void
  }
