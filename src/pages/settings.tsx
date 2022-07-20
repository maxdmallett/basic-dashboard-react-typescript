import UserSettingsForm from '../components/UserSettingsForm/UserSettingsForm';

function Settings() {
  return (
    <div className='generic-page'>
        <h1>Settings</h1>
        <div className='card'>
            <h2>
                User settings
            </h2>
            <UserSettingsForm/>
        </div>
    </div>
  )
}

export default Settings;