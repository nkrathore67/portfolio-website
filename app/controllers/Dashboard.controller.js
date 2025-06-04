const DashboardController = {
    getDashboard: (req, res) => {
        res.render('dashboard', { title: 'Dashboard' });
    },

    getDashboardStats: (req, res) => {
        res.json({ stats: 'Dashboard statistics data' });
    },

    getDashboardSettings: (req, res) => {
        res.render('dashboard/settings', { title: 'Dashboard Settings' });
    }
};

module.exports = DashboardController;