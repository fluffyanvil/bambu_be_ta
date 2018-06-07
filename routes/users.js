const path = '/users'
const User = require('../models/User')
const config = require('../config')

function profile(scores, mappings) {
    const total = scores.reduce(function (acc, val) {
        return acc + val
    })
    let profile = ''
    mappings.sort((a, b) => {
        if (a.value < b.value)
            return -1;
        if (a.value > b.value)
            return 1;
        return 0;
    }).forEach(element => {
        if (total >= element.value)
            profile = element.key        
    });
    return profile
}

module.exports = (app) => {
    app.get(path, (req, res) => {
        User.find()
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json(errs))
    })

    app.post(path, (req, res) => {
        const user = new User(req.body)
        user.profile = profile(user.scores, config.profileMappings)
        user.save()
            .then(u => res.status(200).json(u))
            .catch(err => res.status(500).json(err))
    })

    app.put(path, (req, res) => {
        const user = req.body        
        User.findOneAndUpdate({
            _id: user._id
        }, {
            $set : {
                scores: user.scores,
                profile: profile(user.scores, config.profileMappings)
            }
        },{
            new: true
        })
        .then(u => res.status(200).json(u))
        .catch(err => res.status(500).json(err))        
    })
}