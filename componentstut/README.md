# Angular Components

## Overview

Components are the fundamental building blocks of Angular applications. Each component represents a distinct part of a web page, helping you organize your application into a clear structure that's easy to maintain and scale over time.

## Component Structure

Every Angular component consists of several key parts:

1. **@Component Decorator** - Contains configuration used by Angular
2. **HTML Template** - Controls what renders into the DOM
3. **CSS Selector** - Defines how the component is used in HTML
4. **TypeScript Class** - Contains the component's logic and behaviors (handling user input, server requests, etc.)

## Creating Components

### Basic Component Example

```typescript
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
})
export class UserProfile { /* Your component code goes here */ }
```

### Adding Styles Inline

You can add CSS directly to your component using the `styles` property:

```typescript
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; } `,
})
export class UserProfile { /* Your component code goes here */ }
```

### Using Separate Files

For cleaner organization, you can separate HTML and CSS into different files:

```typescript
// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}
```

**HTML file:**
```html
<!-- user-profile.html -->
<h1>User profile</h1>
<p>This is the user profile page</p>
```

**CSS file:**
```css
/* user-profile.css */
h1 {
  font-size: 3em;
}
```

## Using Components Within Other Components

To use a component within another component:

1. Import the component in your TypeScript file
2. Add the component to the `imports` array in your `@Component` decorator
3. Use the component's selector in your template

Example:
```typescript
import { ProfilePhoto } from './profile-photo';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
  imports: [ProfilePhoto]
})
export class UserProfile {
  // Component logic here
}
```