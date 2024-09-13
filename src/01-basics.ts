interface Friend {
    name: string;
    phone: string;
    age: number
}

interface Colleague {
    name: string;
    department: string;
    contact: ContactInfo;
  }

interface ContactInfo {
    email: string;
    extension: number;
  }

interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

const friend1: Friend = {
    name: "Alex Fan",
    phone: "087-12345",
    age: 24,
  };
  
  const friend2: Friend = {
    name: "Jordan Flynn",
    phone: "086--12345",
    age: 40,
  };
  
  const friends = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Robert Walsh",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Jon Walshe",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Evan Sinnott",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);