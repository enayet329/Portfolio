export class Tag {
  static readonly CSharp = new Tag('C#', '#178600');
  static readonly ASPNET = new Tag('ASP.NET Core', '#5C2D91');
  static readonly EntityFramework = new Tag('Entity Framework Core', '#8E43E7');
  static readonly ASPIDENTITY =  new Tag('ASP.NET Identity', '#1ABC9C');  
  static readonly NETWebAPI = new Tag('.Net Web API', '#7044FF');
  static readonly JavaScript = new Tag('JavaScript', '#178600');
  static readonly TypeScript = new Tag('TypeScript', '#3178C6');
  static readonly Angular = new Tag('Angular', '#E23E57');
  static readonly React = new Tag('React', '#61DBFB');
  static readonly NextJs = new Tag('Next Js', '#764ABC');
  static readonly Docker = new Tag('Docker', '#2496ED');
  static readonly SQL = new Tag('SQL Server', '#CC2927');
  static readonly MongoDB = new Tag('MongoDB', '#4DB33D');
  static readonly RabbitMQ = new Tag('RabbitMQ', '#FF6600');
  static readonly JWT = new Tag('JSON Web Token', '#F44D27');
  static readonly Html = new Tag('Html', '#FF6600');
  static readonly Css = new Tag('CSS', '#F44D27');
  static readonly Unsplash = new Tag('Unsplash API KEY', '#F44D27');
  static readonly OpenApi = new Tag('OpenAPI Key', '#F44D27');
  static readonly Swagger = new Tag('Swagger', '#F44D27');
  static readonly MicroservicesArchitecture = new Tag('Microservices Architecture','#FF7044');
  static readonly CleanArchitecture = new Tag('Clean Architecture', '#FF7044');
  static readonly SOLID = new Tag('SOLID', '#FF7044');
  static readonly REST = new Tag('REST', '#FF7044');
  static readonly more = new Tag('...', '#FF7044');
  static readonly Git = new Tag('Git', '#F44D27');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString(): string {
    return this.key;
  }
}
