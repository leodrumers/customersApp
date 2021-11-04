export interface Customer {
    id?: number;
    salutation: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    emailAddress: string;
    telePhoneNumber: string;
}


export const CUSTOMER_LIST: Customer[] = [
    {
        id: 1,
        salutation: 'Mr',
        firstName: 'Jhon',
        lastName: 'Doe',
        addressLine1: '1222 56th St S',
        addressLine2: 'apt 23',
        city: 'Fargo',
        state: 'ND',
        zipCode: '58194',
        emailAddress: 'jhon.doe@sample.com',
        telePhoneNumber: '5551345699'
    },
    {
        id: 2,
        salutation: 'Mrs',
        firstName: 'Jane',
        lastName: 'Smith',
        addressLine1: '2484 Central Avenue',
        addressLine2: 'apt 301',
        city: 'Oakland',
        state: 'ND',
        zipCode: '07436',
        emailAddress: 'jane.smith@sample.com',
        telePhoneNumber: '2014056665'
    },
    {
        id: 3,
        salutation: 'Mrs',
        firstName: 'Rufus',
        lastName: 'Y Irvin',
        addressLine1: '3279 Capitol Avenue',
        addressLine2: 'ph 2',
        city: 'Indianapolis',
        state: 'IN',
        zipCode: '46225',
        emailAddress: 'rufus.irvin@yopmail.com',
        telePhoneNumber: '7655795425'
    },
    {
        id: 4,
        salutation: 'Mr',
        firstName: 'Alonzo L',
        lastName: 'Torres',
        addressLine1: '3979 Round Table Drive',
        addressLine2: '',
        city: 'Hamilton',
        state: 'OH',
        zipCode: '45011',
        emailAddress: 'alonzoTorres@sample.com',
        telePhoneNumber: '5138681255'
    },
]