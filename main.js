const createChassis = () => {
    const newChassisObject = {}

    return newChassisObject
}

const addWheels = (chassisObj) => {
    chassisObj.wheels = 4

    return chassisObj
}

const addEngine = (chassisWithWheels) => {
    chassisWithWheels.engine = "4.8L"

    return chassisWithWheels
}

const addSteeringWheel = (chassisWithEngine) => {
    chassisWithEngine.steeringWheel = "Tilting"

    return chassisWithEngine
}

const addBody = (chassisWithSteering) => {
    chassisWithSteering.body = "Fever"

    return chassisWithSteering
}

const addDriveTrain = (chassisWithBody) => {
    chassisWithBody.driveTrain = "Two wheel drive"

    return chassisWithBody
}

let chassis = createChassis()
console.log(chassis)

let chassisWithWheels = addWheels(chassis)
console.log(chassisWithWheels)

let chassisWIthEngine = addEngine(chassisWithWheels)
console.log(chassisWIthEngine)

let chassisWithSteeringWheel = addSteeringWheel(chassisWIthEngine)
console.log(chassisWithSteeringWheel)

let chassisWIthBody = addBody(chassisWithSteeringWheel)
console.log(chassisWIthBody)

let chassisWithDriveTrain = addDriveTrain(chassisWIthBody)
console.log(chassisWithDriveTrain)