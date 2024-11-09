interface Profile {
    name: string;
    age: number;
    email: string;
}

// crate function updating data and i have received two object one is Profile type and another is Partial object update where every property from the Profile type

function updateProfile(T: Profile, update: Partial<Profile>): Profile {
    return { ...T, ...update };
}

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
