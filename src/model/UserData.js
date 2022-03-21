/**
 * Class representing user data
 */
class UserData {
    constructor({ id, userInfos, todayScore, keyData }) {
        this.id = id
        this.userInfos = new UserInfos(userInfos)
        this.todayScore = todayScore
        this.keyData = new KeyData(keyData)
    }
}

/**
 * Class representing user informations
 */
class UserInfos {
    constructor({ firstName, lastName, age }) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

/**
 * Class representing user key data
 */
class KeyData {
    constructor({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) {
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }
}

export default UserData
