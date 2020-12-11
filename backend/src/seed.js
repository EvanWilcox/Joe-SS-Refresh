const { PrismaClient } = require('@prisma/client');
const  faker = require('faker');
const prisma = new PrismaClient();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



async function main() {
    for (let index = 0; index < 20; index++) {   
        const newClass = await prisma.class.create({
            data: {
                name: `${faker.name.jobArea()} ${faker.random.arrayElement(["I", "II", "", "III"])}`,
                code: `${faker.random.number({min: 10000, max: 99999})}`,
                title: `${faker.commerce.productAdjective()} ${faker.name.jobArea()}`,
                days: faker.random.arrayElement(["Mon", "Tue", "Wed", "Thu", "Fri", "Mon Wed Fri", "Tue Thu"]),
                time: faker.random.arrayElement(["10:00 AM - 10:50 AM", "11:00 AM - 11:50 AM", "09:00 AM - 09:50 AM", "01:00 PM - 02:30 PM"]),
                location: faker.random.arrayElement(["Harris Hall 208", "Toomey Hall 250", "Emerson Electric Co. 239", "Butler-Carlton Hall 115", "V.H. Mcnutt Hall 206"]),
            }            
        })
    }
    for (let index = 0; index < 5; index++) {      
        const newStudent = await prisma.student.create({
            data: {
                studentID: faker.random.number({min: 10000, max: 99999}),
                profilePicURL: `https://randomuser.me/api/portraits/${faker.random.arrayElement(["men", "women"])}/${faker.random.number({min:5, max: 75})}.jpg`,
                creditsCompleted: faker.random.number({min:10, max: 120}),
                gender: faker.random.arrayElement(["he/him", "she/her", "they/them"]),
                dob: new Date(faker.date.between('1990-01-01', '1999-12-31')).toDateString(),
                birthCountry: faker.address.country(),
                birthState: faker.address.state(),
                maritialStatus: faker.random.arrayElement(["Single", "Divorced", "Married"]),
                militaryStatus: faker.random.arrayElement(["Active", "Reserve", "Veteran", "Retired", "Non-Military"]),
                citizenshipStatus: faker.random.arrayElement(["Citizen", "Permanent Resident"]),
                citizenshipCountry: faker.address.country(),
                visaType: faker.random.arrayElement(["F1", "A2", "C1"]),
                visaPermit: faker.random.arrayElement(["Visa", "Permit"]),
                visaCountry: faker.address.country(),
                names: {
                    create:[
                        {
                            name: faker.name.findName(),
                            type: "Primary"
                        },
                        {
                            name: faker.name.lastName(),
                            type: "Family Name"
                        }
                    ]
                },
                addresses: {
                    create:[
                        {
                            address: `${faker.address.streetAddress("###")} ${faker.address.streetName()}`,
                            type: "Primary"
                        },
                        {
                            address: `${faker.address.streetAddress("###")} ${faker.address.streetName()}`,
                            type: "Local"
                        }
                    ]
                },
                phonenumbers: {
                    create:[
                        {
                            number: faker.phone.phoneNumberFormat(0),
                            type: "Primary",
                            ext: "NA",
                            country: 1,
                            preferred: true,
                        },
                        {
                            number: faker.phone.phoneNumberFormat(0),
                            type: "Local",
                            ext: "123",
                            country: 1,
                            preferred:false,
                        }
                    ]
                },
                emails : {
                    create: [
                        {
                            type: "Primary",
                            address: faker.internet.email(),
                            preferred: true
                        },
                        {
                            type: "Secondary",
                            address: faker.internet.email(),
                            preferred: false
                        }
                    ]
                },
                contacts: {
                    create: [
                        {
                            primary: true,
                            name: faker.name.findName() ,
                            relationship: faker.random.arrayElement(["Father", "Mother", "Spouse", "Sister", "Brother"]),
                            number: faker.phone.phoneNumberFormat(0),
                            ext: 0,
                            country: "+1"
                        },
                        {
                            primary: false,
                            name: faker.name.findName() ,
                            relationship: faker.random.arrayElement(["Father", "Mother", "Spouse", "Sister", "Brother"]),
                            number: faker.phone.phoneNumberFormat(0),
                            ext: 12,
                            country: "+1"
                        }
                    ]
                },
                finance: {
                    create: {
                        accountBalance: faker.random.number({min: 1000, max: 20000})
                    }
                },
                actionItems: {
                    create: [
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: true
                        },
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: false
                        },
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: false
                        },
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: true
                        },
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: false
                        },
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: false
                        },
                        {
                            title: capitalizeFirstLetter(`${faker.hacker.verb()} ${faker.hacker.noun()}`),
                            detail: faker.hacker.phrase(),
                            completed: false
                        },
                    ]
                },
                classes: {
                    connect: [
                        {
                            id: faker.random.number({min: 1, max: 19})
                        },
                        {
                            id: faker.random.number({min: 1, max: 19})
                        },
                        {
                            id: faker.random.number({min: 1, max: 19})
                        },
                        {
                            id: faker.random.number({min: 1, max: 19})
                        }
                    ]
                }
            }
        })    
    }
    
    for (let index = 0; index < 5; index++) {
        const newStudent = await prisma.announcement.create({
            data: {
                title: faker.lorem.sentence(5),
                detail: faker.lorem.sentence(40),
                imageUrl: `${faker.image.imageUrl(160,100)}?random=${Math.round(Math.random() * 1000)}`
            }
        })
    }

    const allStudents = await prisma.student.findMany();
    const allAnn = await prisma.announcement.findMany();

    console.log(allStudents);
    console.log(allAnn);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async() => {
        await prisma.$disconnect();
    })
