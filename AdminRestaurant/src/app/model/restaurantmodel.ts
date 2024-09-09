export interface resturanformmodel{
    name: ['', Validators.required],
  address: ['', Validators.required],
  phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
  email: ['', [Validators.email]],
  cuisineType: ['', Validators.required],
  operatingHours: ['', Validators.required],
  capacity: [''],
  priceRange: [''],
  websiteUrl: [''],
  menuUrl: [''],
  image: [''],
  socialMediaLinks: [''],
  description: [''],
  reservationOptions: [false],
  deliveryTakeoutOptions: [false],
  healthSafetyMeasures: [''],
}