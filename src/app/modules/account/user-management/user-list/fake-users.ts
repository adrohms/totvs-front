import { AddressType } from "../../../base/models/address.model";
import { PersonType } from "../../../base/models/person.model";
import { Phone, PhoneType } from "../../../base/models/phone.mode";
import { User } from "../../../base/models/user.model";

export const fakeUsers: User[] = [
  {
    "id": 1,
    "authorities": ["USER"],
    "person": {
      "id": 101,
      "name": "John Doe",
      "taxId": "123-456-7890",
      "personType": PersonType.NATURAL_PERSON,
      "email": "john.doe@example.com",
      "phones": [
        {"id": 201, "number": 5551234, "phoneType": PhoneType.PERSONAL},
        {"id": 202, "number": 5555678, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 301, "street": "123 Main St", "city": "Cityville", "state": "CA", "zipCode": "12345", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  },
  {
    "id": 2,
    "authorities": ["USER"],
    "person": {
      "id": 102,
      "name": "Jane Doe",
      "taxId": "987-654-3210",
      "personType": PersonType.NATURAL_PERSON,
      "email": "jane.doe@example.com",
      "phones": [
        {"id": 203, "number": 5554321, "phoneType": PhoneType.PERSONAL},
        {"id": 204, "number": 5558765, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 302, "street": "456 Oak St", "city": "Townsville", "state": "NY", "zipCode": "54321", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  },
  {
    "id": 3,
    "authorities": ["USER"],
    "person": {
      "id": 103,
      "name": "Chris Johnson",
      "taxId": null,
      "personType": PersonType.NATURAL_PERSON,
      "email": "chris.johnson@example.com",
      "phones": [
        {"id": 205, "number": 5551111, "phoneType": PhoneType.PERSONAL},
        {"id": 206, "number": 5552222, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 303, "street": "789 Pine St", "city": "Villagetown", "state": "TX", "zipCode": "67890", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  },
  {
    "id": 4,
    "authorities": ["USER"],
    "person": {
      "id": 104,
      "name": "Alex Smith",
      "taxId": "555-777-8888",
      "personType": PersonType.NATURAL_PERSON,
      "email": "alex.smith@example.com",
      "phones": [
        {"id": 207, "number": 5553333, "phoneType": PhoneType.PERSONAL},
        {"id": 208, "number": 5554444, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 304, "street": "987 Elm St", "city": "Hamletville", "state": "FL", "zipCode": "34567", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  },
  {
    "id": 5,
    "authorities": ["USER"],
    "person": {
      "id": 105,
      "name": "Sophie Turner",
      "taxId": "111-222-3333",
      "personType": PersonType.NATURAL_PERSON,
      "email": "sophie.turner@example.com",
      "phones": [
        {"id": 209, "number": 5555555, "phoneType": PhoneType.PERSONAL},
        {"id": 210, "number": 5556666, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 305, "street": "654 Maple St", "city": "Villageton", "state": "CA", "zipCode": "45678", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  },
  {
    "id": 6,
    "authorities": ["USER"],
    "person": {
      "id": 106,
      "name": "Daniel Brown",
      "taxId": null,
      "personType": PersonType.NATURAL_PERSON,
      "email": "daniel.brown@example.com",
      "phones": [
        {"id": 211, "number": 5557777, "phoneType": PhoneType.PERSONAL},
        {"id": 212, "number": 5558888, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 306, "street": "321 Birch St", "city": "Mapleton", "state": "NY", "zipCode": "23456", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  },
  {
    "id": 7,
    "authorities": ["USER"],
    "person": {
      "id": 107,
      "name": "Eva Rodriguez",
      "taxId": "999-888-7777",
      "personType": PersonType.NATURAL_PERSON,
      "email": "eva.rodriguez@example.com",
      "phones": [
        {"id": 213, "number": 5559999, "phoneType": PhoneType.PERSONAL},
        {"id": 214, "number": 5550000, "phoneType": PhoneType.BUSINESS}
      ],
      "addresses": [
        {"id": 307, "street": "876 Cedar St", "city": "Cityton", "state": "TX", "zipCode": "78901", "addressType": AddressType.RESIDENTIAL}
      ]
    }
  }
]
