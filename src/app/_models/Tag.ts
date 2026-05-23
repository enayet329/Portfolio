export class Tag {
  // Languages
  static readonly CSharp     = new Tag('C#', '#9B4F96');
  static readonly Cpp        = new Tag('C++', '#00599C');
  static readonly TypeScript = new Tag('TypeScript', '#3178C6');
  static readonly JavaScript = new Tag('JavaScript', '#F7DF1E');

  // Backend / .NET
  static readonly ASPNET           = new Tag('ASP.NET Core', '#512BD4');
  static readonly NETWebAPI        = new Tag('Web API', '#5C2D91');
  static readonly EntityFramework  = new Tag('EF Core', '#7B1FA2');
  static readonly Dapper           = new Tag('Dapper', '#0EA5E9');
  static readonly gRPC             = new Tag('gRPC', '#244C5A');

  // Architecture
  static readonly Microservices    = new Tag('Microservices', '#06B6D4');
  static readonly CleanArchitecture = new Tag('Clean Architecture', '#10B981');
  static readonly DDD              = new Tag('DDD', '#10B981');

  // API / Auth
  static readonly REST  = new Tag('REST', '#3B82F6');
  static readonly JWT   = new Tag('JWT', '#F44D27');

  // GDS Systems
  static readonly Sabre      = new Tag('Sabre', '#0066B2');
  static readonly Travelport = new Tag('Travelport', '#E11D48');
  static readonly Amadeus    = new Tag('Amadeus', '#005EB8');
  static readonly Zenith     = new Tag('Zenith', '#7C3AED');

  // Databases
  static readonly MSSQL       = new Tag('MSSQL', '#CC2927');
  static readonly MongoDB     = new Tag('MongoDB', '#47A248');
  static readonly TimeScaleDB = new Tag('TimeScaleDB', '#FDB515');

  // Messaging
  static readonly RabbitMQ = new Tag('RabbitMQ', '#FF6600');
  static readonly Kafka    = new Tag('Kafka', '#231F20');

  // Frontend
  static readonly Angular   = new Tag('Angular', '#DD0031');
  static readonly Bootstrap = new Tag('Bootstrap', '#7952B3');
  static readonly Html      = new Tag('HTML', '#E34F26');
  static readonly Css       = new Tag('CSS', '#1572B6');

  // DevOps / tools
  static readonly Docker  = new Tag('Docker', '#2496ED');
  static readonly Git     = new Tag('Git', '#F05032');
  static readonly Swagger = new Tag('Swagger', '#85EA2D');
  static readonly Postman = new Tag('Postman', '#FF6C37');

  private constructor(
    private readonly key: string,
    public readonly color: string,
  ) {}

  toString(): string { return this.key; }
}
