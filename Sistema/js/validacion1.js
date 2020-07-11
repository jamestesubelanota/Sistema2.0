$('#validateForm').bootstrapValidator({
feedbackIcons: {
	valid: 'glyphicon glyphicon-ok',
	invalid: 'glyphicon glyphicon-remove',
	validating: 'glyphicon glyphicon-refresh'
},

fields: {
	full_name: {
		validators: {
			stringLength: {
				min: 5,
				message: 'El nombre es muy corto'
			},
			notEmpty: {
				message: 'Por favor ingresa el nombre'
			}
		}
    },
    last_name: {
		validators: {
			stringLength: {
				min: 5,
				message: 'el apellido es muy corto'
			},
			notEmpty: {
				message: 'Por favor ingresa los apellidos'
			}
		}
	},
	phone: {
		validators: {
			numeric: {
				message: 'El telefono debe ser un numero'
			},
			notEmpty: {
				message: 'Por favor ingresa el numero'
			}
		}
	},
	address: {
		validators: {
			stringLength: {
				min: 15,
				max: 100,
				message:'Por favor ingrese al menos 15 caracteres y no mas de 100'
			},
			notEmpty: {
				message: 'Por favor ingrese su direccion'
			}
		}
	},
	gender: {
		validators: {
			notEmpty: {
				message: 'The gender option is required'
			}
		}
	},
	email: {
		validators: {
			notEmpty: {
				message: 'Por favor ingresa el correo'
			},
			emailAddress: {
				message: 'Ingresa un correo valido'
			}
		}
	},
	date: {
		validators: {
			notEmpty: {
				message: "ingrese una fecha"

			},
			date: {
				message: 'La fecha no es valida',
				format: 'YYYY/MM/DD'
			}
		

		}

	},	

	password: {
		validators: {
			notEmpty: {
				message: 'Enter your profile password'
			}
		}
	},
	confirmPassword: {
		validators: {
			notEmpty: {
				message: 'Enter confirm your profile password'
			},
			identical: {
				field: 'password',
				message: 'Enter the password, what enter in password field'
			}
		}
	 },
	 'lang_known[]': {
		validators: {
			notEmpty: {
				message: 'The Language Known is required'
			}
		}
	},
	role: {
		validators: {
			notEmpty: {
				message: 'Por favor elige una opcion'
			}
		}
	},
	
	}
});
