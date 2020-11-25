interface Position {
  lat: number;
  lon: number;
}

class InMemoryPositionCache {
  private positions = {
    dave: {lat: 63.41810456051351, lon: 10.297998610537565},
    ann: {lat: -45.79664623543368, lon: -72.20230063103442},
  }

  async getPosition(userId: string): Promise<Position> {
    return this.positions[userId] || {lat: 0, lon: 0};
  }

  async setPosition(userId: string, position: Position): Promise<void> {
    this.positions[userId] = position;
  }
}
